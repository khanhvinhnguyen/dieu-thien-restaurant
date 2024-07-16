const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

type MenuItem = {
  category: string;
  name: string;
  price: string;
  desc: string;
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

const parseXlsx = () => {
  const workbook = XLSX.readFile(xlsxFilePath);
  const sheetNames = workbook.SheetNames;

  sheetNames.forEach((sheetName: string) => {
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const lowerSheetName = sheetName.toLowerCase();

    jsonData.forEach((row: any) => {
      const { Category, Name, Price, Desc, Image, Favorite } = row;
      const bestSeller = String(Favorite).toLowerCase() === 'true';

      const item: MenuItem = {
        category: Category,
        name: Name,
        price: Price,
        desc: Desc,
        img: Image,
        bestSeller,
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
