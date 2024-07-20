const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

type MenuItem = {
  name: {
    vi: string;
    en: string;
    zh: string;
  };
  price: string;
  desc: {
    vi: string;
    en: string;
    zh: string;
  },
  img: string;
  bestSeller: boolean;
};

type Menu = {
  [categoryName: string]: MenuItem[];
};

type MenuJson = {
  [sheetName: string]: Menu;
};

const xlsxFilePath = path.resolve(__dirname, '../../public/data/menu.xlsx');
const jsonFilePath = path.resolve(__dirname, '../../public/data/menu.json');

const menu: MenuJson = {
  food: {},
  drink: {},
};

const isValidRow = (row: any): boolean => {
  const requiredFields = [
    'Category', 'Name', 'Price', 'Desc', 'Name_en', 'Desc_en', 'Name_zh', 'Desc_zh'
  ];
  return requiredFields.every(field => row[field]);
};

const parseXlsx = () => {
  const workbook = XLSX.readFile(xlsxFilePath);
  const sheetNames = workbook.SheetNames;

  sheetNames.forEach((sheetName: string) => {
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const lowerSheetName = sheetName.toLowerCase();

    jsonData.forEach((row: any) => {
      if (!isValidRow(row)) {
        return;
      }

      const { Category, Name, Price, Desc, Image, Favorite, Name_en, Desc_en, Name_zh, Desc_zh } = row;
      const bestSeller = String(Favorite).toLowerCase() === 'true';

      const item: MenuItem = {
        name: { vi: Name, en: Name_en, zh: Name_zh },
        price: Price || 0,
        desc: { vi: Desc, en: Desc_en, zh: Desc_zh },
        img: Image || '/images/Logo.svg',
        bestSeller
      };

      if (lowerSheetName === 'food' || lowerSheetName === 'drink') {
        if (!menu[lowerSheetName][Category]) {
          menu[lowerSheetName][Category] = [];
        }
        menu[lowerSheetName][Category].push(item);
      }
    });
  });
};

const writeJson = () => {
  fs.writeFileSync(jsonFilePath, JSON.stringify(menu, null, 2), 'utf-8');
};

const generateMenuJson = () => {
  try {
    parseXlsx();
    writeJson();
    console.log('Excel file has been converted to JSON');
  } catch (error) {
    console.error('Error processing Excel file:', error);
  }
};

generateMenuJson();
