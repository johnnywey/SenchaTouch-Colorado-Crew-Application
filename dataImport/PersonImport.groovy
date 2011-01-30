import au.com.bytecode.opencsv.*

def categoryIndex = 0
def subcategoryIndex = 1
def cityIndex = 6
def zipCodeIndex = 7

def cityOutput = new File("../app/stores/Cities.js")
def categoryOutput = new File("../app/stores/Categories.js")
def personOutput = new File("../app/stores/People.js")
def zipCodeOutput = new File("../app/stores/ZipCodes.js")

cityOutput.delete()
categoryOutput.delete()
personOutput.delete()
zipCodeOutput.delete()

def cities = new CSVReader(new FileReader("PRODDATA.CSV"))
def categories = new CSVReader(new FileReader("PRODDATA.CSV"))
def zipCodes = new CSVReader(new FileReader("PRODDATA.CSV"))

def insertStartCity = """Ext.regStore("Cities", {
    model: "City", 
    data: ["""
    
def insertStartCategory = """Ext.regStore("Categories", {
    model: "Category", 
data: ["""    

def insertStartZipCode = """Ext.regStore("ZipCodes", {
    model: "ZipCode", 
data: ["""  

def insertStartPerson = """Ext.regStore("People", {
    model: "Person", 
data: ["""  

def finalOutput = """]
});"""

String[] nextLine
def cityMap = [:]
def categoryMap = [:]
def zipCodeMap = [:]
def personCategoryMap = [:]

// cities
cityOutput << insertStartCity
def id = 1
while((nextLine = cities.readNext())) {    
    def cityName = MakeProperNoun.make((nextLine[cityIndex]).toLowerCase())
    if(!cityName)
        cityName = "None"
    if(!cityMap[cityName.toLowerCase()]) {
        def city = new City(name:cityName,id:id)
        cityMap.put(city.name.toLowerCase(),city.id)
        if(id > 1) {
            cityOutput << ","
        }
        cityOutput << city.toJson() + "\n"
        id++
    }
}
cityOutput << finalOutput

// categories
categoryOutput << insertStartCategory
id = 1
while((nextLine = categories.readNext())) {
    if(!categoryMap[MakeProperNoun.make(nextLine[categoryIndex]).toLowerCase()]) {
        def category = new CrewCategory(name:MakeProperNoun.make(nextLine[categoryIndex]),id:id)
        categoryMap.put(category.name.toLowerCase(),category.id)
        if(id > 1) {
            categoryOutput << ","
        }
        categoryOutput << category.toJson() + "\n"
        id++
    }
    if(!categoryMap[MakeProperNoun.make(nextLine[subcategoryIndex]).toLowerCase()]) {
        def category = new CrewCategory(name:MakeProperNoun.make(nextLine[subcategoryIndex]),id:id)
        categoryMap.put(category.name.toLowerCase(),category.id)
        if(id > 1) {
            categoryOutput << ","
        }        
        categoryOutput << category.toJson() + "\n"
        id++
    }
}
categoryOutput << finalOutput

// zip codes
zipCodeOutput << insertStartZipCode
id = 1
while((nextLine = zipCodes.readNext())) {
    def splitCode = nextLine[zipCodeIndex].split("-")[0]
    if(!zipCodeMap[splitCode]) {
            if(splitCode!='') {
                def zipCode = new ZipCode(code:splitCode,id:id)
                zipCodeMap.put(zipCode.code,zipCode.id)
                if(id > 1) {
                    zipCodeOutput << ","
                }
                zipCodeOutput << zipCode.toJson() + "\n"
                id++
        }
    }
}
zipCodeOutput << finalOutput

// people
personOutput << insertStartPerson
def reader = new CSVReader(new FileReader("PRODDATA.csv"))
def personInsertMap = [:]
def externalId = 1
while ((nextLine = reader.readNext())) {
    def person = new Person()
    if(nextLine[categoryIndex]) 
        person.primaryCategory = categoryMap[MakeProperNoun.make(nextLine[categoryIndex]).toLowerCase()]
    if(nextLine[subcategoryIndex])
        person.secondaryCategory = categoryMap[MakeProperNoun.make(nextLine[subcategoryIndex]).toLowerCase()]
    person.companyName = MakeProperNoun.make(nextLine[2].replace("\"",""))
    person.primaryName = MakeProperNoun.make(nextLine[3].replace("'",""))
    if(!person.primaryName) {
        person.primaryName = MakeProperNoun.make(person.companyName)
    }
    
    person.lastName = MakeProperNoun.make(nextLine[4].replace("'",""))
    // if there is no last name field, try to fill it with something
    if(!person.lastName) {
        String name = person.companyName
        if(!name) 
            name = person.primaryName
        person.lastName = MakeProperNoun.make(name.split(" ")[0])
    }
    person.phoneNumber = nextLine[5]
    if(nextLine[cityIndex] && nextLine[cityIndex]!='')
        person.city = cityMap[MakeProperNoun.make(nextLine[cityIndex]).toLowerCase()]
    else
        person.city = cityMap['none']
    if(nextLine[zipCodeIndex] && nextLine[zipCodeIndex]!='')
        person.zipCode = zipCodeMap[nextLine[zipCodeIndex].split("-")[0]]
    person.emailAddress = nextLine[8]
        if(nextLine.size() > 9)
        person.description = nextLine[9].replace("\"","'")
    person.externalId = externalId
        def key = person.primaryName + person.lastName + person.companyName + person.primaryCategory + person.secondaryCategory
        if(!personCategoryMap[key.toLowerCase()]) {
            if(externalId > 1) {
                personOutput << ","
            }
            personOutput << person.toJson() + "\n"
            personCategoryMap.put(key.toLowerCase(), true)
            externalId++
    } else {
        println "${person.primaryName},${person.companyName},${nextLine[categoryIndex]},${nextLine[subcategoryIndex]}"
    }
}
personOutput << finalOutput