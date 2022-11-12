from selenium import webdriver
from selenium.webdriver import FirefoxOptions
from selenium.webdriver.common.by import By


def available(filters): return '&filters=True&' + \
    '&'.join([f'{key}={value}' for key, value in filters.items()])


options = FirefoxOptions()
options.add_argument('--headless')

driver = webdriver.Firefox(options=options)


def get_link(element):
    x = element.get_attribute('href')
    return x or get_link(element.parent)


def get_med(name, filters=None):
    driver.get(
        f"https://www.1mg.com/search/all?name={name}{available(filters)}")
    elements = driver.find_elements(
        by=By.CLASS_NAME, value='style__pro-title___3zxNC')

    return elements, [get_link(e) for e in elements], len(elements) == 1


def alts(x):
    return {
        "name": x.find_element(By.CLASS_NAME, 'SubstituteItem__name___PH8Al').text,
        "price": x.find_element(By.CLASS_NAME, 'SubstituteItem__unit-price___MIbLo').text,
        "manufacturer": x.find_element(By.CLASS_NAME, 'SubstituteItem__manufacturer-name___2X-vB').text,
        "diff": x.find_element(By.CLASS_NAME, 'SubstituteItem__save-text___1DPP8').text,
    }


def get_med_details(link):
    print(f"{link=}")
    driver.get(link)
    data = {
        "name": driver.find_element(By.CLASS_NAME, "DrugHeader__title-content___2ZaPo").text,
        "price": driver.find_element(By.CLASS_NAME, 'DrugPriceBox__best-price___32JXw').text,
        "composition": driver.find_element(By.CLASS_NAME, "DrugHeader__meta-value___vqYM0").text,
        "description": driver.find_element(By.CLASS_NAME, 'DrugOverview__content___22ZBX').text.split('\n')[0],
        "uses": [x.text for x in driver.find_element(By.CLASS_NAME, 'DrugOverview__uses___1jmC3').find_elements(By.TAG_NAME, 'a')],
        "side-effects": [x.text for x in driver.find_elements(By.CSS_SELECTOR, '.DrugOverview__list-container___2eAr6 > ul:nth-child(1) > li')],
        "alternatives": list(map(alts, driver.find_elements(By.CLASS_NAME, 'SubstituteItem__item___1wbMv'))),
    }
    return data

if __name__ == "__main__":
    name = "Paracetamol"
    elements, links, single = get_med(name)
    print(f"{elements=}")
    print(f"{links=}")
    print(f"{single=}")
    if single:
        print(get_med_details(links[0]))
