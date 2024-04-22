export const generateItem = ({pathImgFirst, pathImgSecond, name, description, cost, discountProCent, addedDate}) => {
    const discountCost = discountPrice(discountProCent, cost)
    return `
    <div class="flex flex-col justify-between relative bg-[#F4F4F6] transition-all duration-300 rounded-b-2xl pb-3 mt-12 lg:mt-24">
            <div class="group relative flex justify-center">
                <img class="lg:h-[590px] h-[217px] hover:opacity-0 ease-in-out duration-300 transition-all" alt="${name}" src="/img/${pathImgFirst}.png"/>
                <img class="lg:h-[590px] h-[217px] top-0 left-0  absolute opacity-0 hover:opacity-100 ease-in-out duration-300 transition-all"
                     alt="1" src="/img/${pathImgSecond}.png"/>
                <div class="absolute bottom-3 z-10 flex gap-5">
                    <div class="p-3 rounded-full bg-white ease-in-out duration-300 border border-white z-10 transition-colors group-hover:bg-transparent"></div>
                    <div class="p-3 rounded-full border ease-in-out duration-300 border-white z-10 transition-colors group-hover:bg-white"></div>
                </div>
            </div>
            <div class="absolute flex top-2 right-4 gap-5">
                ${discountCost !== cost ? '<span class="lg:p-5 p-2 bg-lime-400 rounded-full inline-flex items-center justify-center  lg:text-3xl">%</span>' : ''}
                ${isNew(addedDate) ? '<span class="lg:p-5 p-2 bg-white rounded-full inline-flex items-center justify-center lg:text-2xl">New</span>' : ''}
            </div>
            <div class="flex flex-col justify-between items-center">
                <span class="w-[156px] lg:w-[385px] lg:mt-4 text-black text-sm lg:text-[21px] font-medium uppercase leading-7">${name}</span>
                <div class="self-end flex flex-col items-end mr-5 mb-3">
                    <span class="text-black text-opacity-50 text-lg font-medium leading-normal">${description}</span>
                    ${discountCost !== cost ? `<span class="text-black text-xs lg:text-3xl font-medium lg:leading-[39px]">${discountCost} ₽ <span class="text-black text-opacity-30 text-xs lg:text-3xl font-medium line-through ls:leading-[39px]">${cost} ₽</span> / м2</span>` : `<span class="text-black text-xs lg:text-3xl font-medium lg:leading-[39px]">${cost} ₽ / м2</span>`}
                </div>
                <button class="lg:w-[385px] lg:h-[63px] lg:px-[30px] lg:pt-[15px] lg:pb-4 w-[136px] h-9 px-[30px] pt-[7px] pb-2 rounded-[50px] border border-black justify-center items-center  inline-flex text-black text-xl hover:text-white hover:bg-black transition-all ease-in-out duration-500">
                    Купить
                </button>
            </div>
        </div>
    `
}

function isNew(addedDate) {
    const dayAdded = Number(addedDate.split('-')[0])
    const monthAdded = Number(addedDate.split('-')[1])
    const yearAdded = Number(addedDate.split('-')[2])
    const currentDate = new Date();

    let dayToday = currentDate.getDate();
    let monthToday = currentDate.getMonth() + 1;
    const yearToday = currentDate.getFullYear();
    if (yearToday - yearAdded < 0) return true;
    else if (monthToday - monthAdded <= 0) return true;
    else if (dayToday - dayAdded <= 0) return true;
    else return false;
}

function discountPrice(proCent, cost) {
    if (proCent === false) return cost
    const oneProCent = cost / 100
    return Math.round(cost - oneProCent * proCent)
}

const namesArray = [
    'Spc ламинат Moduleo LayRed Laurel Oak 51864',
    'Vinyl плитка Gerflor Senso Urban 5113',
    'Laminate панели Quick-Step Majestic 3442',
    'Engineered деревянный паркет Kahrs Artisan Oak 7851',
    'Linoleum плитка Forbo Marmoleum Click Cinch Loc 9222',
    'ПВХ плитка Tarkett iD Essential 6698',
    'Ламинированные плитки Pergo Extreme Wood Originals 2481',
    'Solid деревянный пол Bruce American Originals Natural Oak 3739',
    'Spc ламинат Moduleo LayRed Wood 6412',
    'Vinyl планка Gerflor Virtuo Clic 7579',
    'Laminate плитка Quick-Step Compact Country 9325',
    'Engineered деревянный паркет Kahrs Supreme Oak 1115',
    'Linoleum плитка Forbo Marmoleum Real 6034',
    'ПВХ планка Tarkett Starfloor Click 7083',
    'Ламинированные плитки Pergo Portfolio WetProtect 8057',
    'Solid деревянный пол Bruce Hydropel Oak 4218',
    'Spc ламинат Moduleo Impress Wood 5794',
    'Vinyl планка Gerflor Senso Lock Plus 2267',
    'Laminate плитка Quick-Step Eligna Wide 8846',
    'Engineered деревянный паркет Kahrs Oak Fino 6552'
];

const descriptionArray = [
    '31 класс 5 мм',
    '32 класс 5.5 мм',
    '34 класс 6.5 мм',
    '30 класс 5 мм',
    '35 класс 7 мм',
    '31 класс 5 мм',
    '33 класс 6 мм',
    '32 класс 5.5 мм',
    '36 класс 7 мм',
    '30 класс 5 мм',
    '34 класс 6.5 мм',
    '35 класс 7 мм',
    '33 класс 6 мм',
    '31 класс 5 мм',
    '37 класс 7.5 мм',
    '36 класс 7 мм',
    '32 класс 5.5 мм',
    '38 класс 8 мм',
    '39 класс 8.5 мм',
    '33 класс 6 мм'
];

export function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomItem() {
    const item = {}
    item.pathImgFirst = getRandomNumber(1, 8)
    item.pathImgSecond = getRandomNumber(1, 8)
    item.name = namesArray[getRandomNumber(0, 20)]
    item.description = descriptionArray[getRandomNumber(0, 20)]
    item.cost = getRandomNumber(2000, 8000)
    if (getRandomNumber(0, 1) === 0) {
        item.discountProCent = false
    } else {
        item.discountProCent = getRandomNumber(3, 50)
    }
    item.addedDate = `${getRandomNumber(1, 30)}-${getRandomNumber(1, 12)}-2024`
    return item
}

export function generateShowItems(itemsToShow) {
    const itemsContainer = document.querySelector('#items-container');
    if (!window.localStorage.getItem("items")) {
        const generatedItems = [];
        for (let i = 0; i < getRandomNumber(6, 21); i++) {
            generatedItems.push(getRandomItem());
        }
        window.localStorage.setItem("items", JSON.stringify(generatedItems));
    }
    JSON.parse(window.localStorage.getItem("items")).forEach((item, i) => {
        const card = document.createElement('div');
        card.classList.add('slider-item');
        itemsContainer.appendChild(card);
        card.outerHTML = generateItem(item);
        const currentItem = itemsContainer.children[i]
        currentItem.classList.add('slider-item')
        currentItem.id = i + 1
        if (i >= itemsToShow) {
            currentItem.classList.add('hidden')
            currentItem.classList.add('-ml-full')
        }
    })
}

export const nextPagination = () => {
    let nextListIndex;
    const paginationContainer = document.querySelector('#pagination-container');
    Array.from(paginationContainer.children).forEach((item, i) => {
        if (item.classList.contains('bg-black')) {
            item.classList.remove('bg-black')
            nextListIndex = i + 1
        } else if (nextListIndex === i) {
            item.classList.add('bg-black')
        }
    })
}
export const prevPagination = () => {
    let prevListIndex;
    const paginationContainer = document.querySelector('#pagination-container');
    const childrenPagination = Array.from(paginationContainer.children).reverse()
    Array.from(childrenPagination).forEach((item, i) => {
        if (item.classList.contains('bg-black')) {
            item.classList.remove('bg-black')
            prevListIndex = i + 1
        } else if (prevListIndex === i) {
            item.classList.add('bg-black')
        }
    })

}
export const generatePagination = () => {
    const paginationContainer = document.querySelector('#pagination-container');
    const itemsContainer = document.querySelector('#items-container')
    const itemsLength = itemsContainer.children.length
    const activePage = '<div class="lg:p-4 p-2 bg-black rounded-full border border-black"></div>'
    const inactivePage = '<div class="lg:p-4 p-2 rounded-full border border-black"></div>'
    const showInPage = isMobile() ? 2 : 3
    // console.log(Math.round(itemsLength / showInPage))
    for (let i = 0; i < Math.round(itemsLength / showInPage); i++) {
        if (i === 0) {
            const preparing = document.createElement('div')
            paginationContainer.appendChild(preparing)
            preparing.outerHTML = activePage
            preparing.id = `${i}-list`
        } else {
            const preparing = document.createElement('div')
            paginationContainer.appendChild(preparing)
            preparing.outerHTML = inactivePage
            preparing.id = `${i}-list`
        }
    }
}
export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent)
}


