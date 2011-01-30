class MakeProperNoun {
    private static String make(String it) {
        def newName = ""
        if(it) {
            it = it.replace("/", ", ")
            String[] splitString = it.split(" ")
            splitString.each() { name->
                if(name)
                    newName += name[0].toUpperCase() + name.substring(1).toLowerCase() + " "
            }
            newName = newName.trim()
            if(newName?.toLowerCase().contains("denver"))
                newName = "Denver"
        }
        if(newName=="")
            newName = null
        return newName
    }
}