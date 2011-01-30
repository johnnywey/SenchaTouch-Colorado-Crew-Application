class ZipCode {
    String code
    Integer id
    
    public String toJson(){
		return "{id:${id},\"code\":\"${code}\"}"
	}
}