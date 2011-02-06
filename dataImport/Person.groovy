class Person {
	String externalId
	ZipCode zipCode
	String primaryCategory
	String secondaryCategory
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
		"\"secondaryCategoryId\": \"${secondaryCategory}\",\"city\":\"${city?.name}\",\"primaryCategoryId\":\"${primaryCategory}\"," +
		"\"phoneNumber\":${phoneNumber ? "\"${phoneNumber}\"" : null},\"companyName\":${companyName ? "\"${companyName}\"" : null},\"emailAddress\":\"${emailAddress}\",\"primaryName\":\"${primaryName}\"," +
		"\"lastName\":\"${lastName}\",\"description\":${description ? "\"${description}\"" : null}}"
	}
	
}