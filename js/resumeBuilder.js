/*
Resume builder project from Udacity
 */

var work = {
	"jobs": [
	{
		"employer": "Oak Ridge National Laboratory",
		"title": "Research Scientist | Computational Sciences and Engineering",
		"location": "Oak Ridge, TN",
		"dates": "2018-present",
		"description": "- Machine/Deep learning <br> \
		- Multiscale simulations and analysis <br> \
		- Computational docking"
	},
	{
		"employer": "Oak Ridge National Laboratory",
		"title": "Research Scientist | Neutron Scattering",
		"location": "Oak Ridge, TN",
		"dates": "2011-2018",
		"description": "- Collaborative, multi-disciplinary research <br> \
		- Data analysis pipelines and modeling"
	},
	{
		"employer": "Oak Ridge National Laboratory",
		"title": "Clifford Shull Research Fellow",
		"location": "Oak Ridge, TN",
		"dates": "2007-2011",
		"description": "- Design and perform research using neutron scattering"
	},
	{
		"employer": "NIST and NIH",
		"title": "National Research Council Postdoctoral Research Associate",
		"location": "Gaithersburg/Bethesda, MD",
		"dates": "2004-2007",
		"description": "- Joint position to perform research across multiple \
		disciplines <br>- Integrate results from different experiments <br> \
		- Develop mathematical models to fit data"
	}]
};

var projects = {
	"projects": [
	{
		"title": "title",
		"dates": "dates",
		"description": "work description",
		"images": "(optional) images array"
	},
	{
		"title": "title",
		"dates": "dates",
		"description": "work description",
		"images": "(optional) images array"
	}]
};

var education = {
	"schools": [
	{
		"name": "University of Massachusetts, Amherst",
		"location": "Amherst, MA",
		"degree": "Ph.D.",
		"major": "Polymer Science and Engineering",
		"dates": ""
	},
	{
		"name": "Georgia Institute of Technology",
		"location": "Atlanta, GA",
		"degree": "B.S.",
		"major": "Polymer Chemistry",
		"dates": ""
	}]
};

var skills = ["Machine/Deep Learning", "Data Science", "Cryptography",
		"Simulations, Modeling",
		"Technical Writing", "Presentations", "Project Management",
		"<a href=https://orcid.org/0000-0002-4226-7710>Scientific Publications</a>",
];

var bio = {
	"name": "Chris Stanley",
	"role": "Ph.D. Research Scientist",
	"contacts": "<a href=https://github.com/cbstanley>My Github</a>",
	"photo": "",
	"message": "",
	"skills": skills
};

document.getElementById("education").style.backgroundColor = "#e5e8ed";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

$("#footerContacts").append(bio.contacts);

function displayEducation(){
	for (var school in education.schools) {
		// create new div for education
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace(
			"%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace(
			"%data%", education.schools[school].degree);
		var formattedSchoolDegree = formattedSchool + formattedDegree;
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedDates = HTMLschoolDates.replace(
			"%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace(
			"%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace(
			"%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
	}
};

displayEducation();

function displayWork(){
	for (var job = 0; job < work["jobs"].length; job++) {
		// create new div for work experience
		$(workExperience).append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace(
			"%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace(
			"%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace(
			"%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace(
			"%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace(
			"%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();

//exercise to show click locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

//exercise to make internat'l button
// $("#main").append(internationalizeButton);
//
// function inName(){
// 	allName = bio.name.split(" ");
// 	firstName = allName[0];
// 	lastName = allName[1].toUpperCase();
//
// 	return firstName + " " + lastName;
// };

// insert projects description
// projects.display = function() {
// 	for (project in projects.projects) {
// 		$("#projects").append(HTMLprojectStart);
//
// 		var formattedTitle = HTMLprojectTitle.replace(
// 		"%data%", projects.projects[project].title);
// 		$(".project-entry:last").append(formattedTitle);
// 	}
// };

//can add a map (needs lines uncommented in helper.js and index.html, plus API key)
//$("#mapDiv").append(googleMap);
