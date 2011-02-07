class Person {
	String externalId
	ZipCode zipCode
	CrewCategory primaryCategory
	CrewCategory secondaryCategory
	City city
	String companyName
	String emailAddress
	String primaryName
	String lastName
	String description
	String phoneNumber
	
	public String toJson() {
        if(companyName && !lastName)
            lastName = companyName
        if(description) {
            description = description.replaceAll('"', "'")
            description = description.replaceAll("\n", "")
        }
		return "{id: ${externalId},\"zipCode\": ${(zipCode && zipCode.code && zipCode.code.size() > 4) ? "\"${zipCode.code}\"" : null}," + 
		"\"secondaryCategoryId\": ${secondaryCategory.id},\"secondaryCategoryName\":\"${secondaryCategory.name}\",\"city\":\"${city?.name}\"," + 
		"\"primaryCategoryId\":${primaryCategory.id},\"primaryCategoryName\":\"${primaryCategory.name}\","+
		"\"phoneNumber\":${phoneNumber ? "\"${phoneNumber}\"" : null},\"companyName\":${companyName ? "\"${companyName}\"" : null},\"emailAddress\":\"${emailAddress}\",\"primaryName\":\"${primaryName}\"," +
		"\"lastName\":\"${lastName}\",\"description\":${description ? "\"${description}\"" : null}}"
	}
	
}