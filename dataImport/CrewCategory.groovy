class CrewCategory {
    String name
    Integer id
    
    public String toJson(){
		return "{id:${id},\"name\":\"${name}\"}"
	}
}