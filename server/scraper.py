from selenium import webdriver
from selenium.webdriver import FirefoxOptions
from selenium.webdriver.common.by import By


def available(filters): return '&filters=True&' + \
    '&'.join([f'{key}={value}' for key, value in filters.items()])


options = FirefoxOptions(
    log_path='/dev/null',
    headless=True,
    binary='/usr/bin/firefox'
)

driver = webdriver.Firefox(options=options)


def get_link(element):
    x = element.get_attribute('href')
    return x or get_link(element.parent)


def get_med(name, filters):
    driver.get(
        f"https://www.1mg.com/search/all?name={name}{available(filters)}")
    elements = driver.find_elements(
        by=By.CLASS_NAME, value='style__pro-title___3zxNC')

    return elements, [get_link(e) for e in elements], len(elements) == 1


def get_med_details(link):
    driver.get(link)
    data = {
        "name": driver.find_element(By.CLASS_NAME, "DrugHeader__title-content___2ZaPo").text,
        "price": driver.find_element(By.CLASS_NAME, 'DrugPriceBox__best-price___32JXw').text,
        "composition": driver
            .find_element(by=By.LINK_TEXT, value='SALT COMPOSITION')
            .parent
            .find_element(by=By.TAG_NAME, value='a').text,
        "description": driver.find_element(By.CLASS_NAME, 'DrugOverview__content___22ZBX').text.split('\n')[0],
        "uses": driver.find_element(By.CLASS_NAME, 'DrugOverview__uses___1jmC3').find_elements(By.TAG_NAME, 'a').text,
        "side-effects": driver.find_element(By.CLASS_NAME, 'DrugOverview__uses___1jmC3').find_elements(By.TAG_NAME, 'a').text,
        "alternatives": driver.find_elements(By.CLASS_NAME, 'SubstituteItem__item___1wbMv').map( lambda x: 
            {
                "name": x.find_element(By.CLASS_NAME, 'SubstituteItem__name___PH8Al').text,
                "price": x.find_element(By.CLASS_NAME, 'SubstituteItem__unit-price___MIbLo').text,
                "manufacturer": x.find_element(By.CLASS_NAME, 'SubstituteItem__manufacturer-name___2X-vB').text,
                "diff": "96.87% cheaper"
            },
            {
                "name": "Omez-Dsr 20mg Capsule",
                "price": "Rs. 156.2/Strip",
                "manufacturer": "Dr Reddy's Laboratories Ltd",
                "diff": "81.8% cheaper"
            },
            {
                "name": "Lopra 20mg Capsule",
                "price": "Rs. 80/Strip",
                "manufacturer": "Arvincare Pharma",
                "diff": "87.62% cheaper"
            }
        ]
    }
