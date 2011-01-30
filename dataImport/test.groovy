import groovy.sql.Sql

def dashDb= Sql.newInstance(
   "jdbc:postgresql://internal-staging.dashcs.com:5432/dash", 
   "postgres",
   "", "org.postgresql.Driver")

dashDb.eachRow("select psap_id from psap where ST_Within(ST_GeomFromText('POINT(-104.98716 39.73909)', 4326), the_geom);") { 
	println it
}

