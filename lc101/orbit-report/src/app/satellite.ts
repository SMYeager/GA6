export class Satellite {

name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;


constructor(
	name: string,
 	type: string, 
	launchDate: string, 
	orbitType: string, 
	operational: boolean){

	this.name = name;
	this.orbitType = orbitType;
	this.launchDate = launchDate;
	this.type = type;
	this.operational = operational;

}

shouldShowWarning(): boolean{
	let answer: boolean = false
	let space: string =  this.type.toLowerCase();
	if(space === "space debris"){
		answer = true;
	}
	return answer;
}


}
