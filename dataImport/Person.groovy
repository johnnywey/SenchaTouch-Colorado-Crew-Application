class Person {
	String externalId
	String zipCode
	String primaryCategory
	String secondaryCategory
	String city
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
		return "{id: ${externalId},\"zipCodeId\": \"${zipCode}\",\"secondayCategoryId\": \"${secondaryCategory}\",\"city\":\"${city}\",\"primaryCategoryId\":\"${primaryCategory}\"," +
		"\"phoneNumber\":\"${phoneNumber}\",\"companyName\":\"${companyName}\",\"emailAddress\":\"${emailAddress}\",\"primaryName\":\"${primaryName}\"," +
		"\"lastName\":\"${lastName}\",\"description\":\"${description}\"}"
	}
	
}