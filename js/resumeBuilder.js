/*
Resume builder project from Udacity
 */

var work = {
	"jobs": [
	{
		"employer": "Oak Ridge National Laboratory",
		"title": "Neutron Scattering Scientist",
		"location": "Oak Ridge, TN",
		"dates": "2011-present",
		"description": "Operate a high-throughput neutron scattering instrument \
		to solve scientific problems"
	},
	{
		"employer": "Oak Ridge National Laboratory",
		"title": "Clifford Shull Research Fellow",
		"location": "Oak Ridge, TN",
		"dates": "2007-2011",
		"description": "Design and perform research using neutron scattering"
	},
	{
		"employer": "University of Tennessee",
		"title": "Joint Faculty Assistant Professor",
		"location": "Knoxville, TN",
		"dates": "2011-present",
		"description": "<i>Department of Biochemistry and Cellular and Molecular \
		Biology</i> <br> \
		Mentor students, serve on thesis committees <br> \
		Deliver guest lectures for graduate-level courses"
	},
	{
		"employer": "NIST and NIH",
		"title": "National Research Council Postdoctoral Research Associate",
		"location": "Gaithersburg/Bethesda, MD",
		"dates": "2004-2007",
		"description": "Joint position to perform research across multiple \
		disciplines, integrate results from different experiments, and develop \
		mathematical models to fit data"
	},
	{
		"employer": "University of Massachusetts, Amherst",
		"title": "Graduate Research Assistant",
		"location": "Amherst, MA",
		"dates": "1999-2004",
		"description": "Determined the interactions of chiral biopolymers using \
		multiple biophysical methods (circular dichroism, X-ray scattering, \
		polarized optical microscopy)"
	},
	{
		"employer": "Georgia Institute of Technology",
		"title": "Undergraduate Research Assistant",
		"location": "Atlanta, GA",
		"dates": "1998-1999",
		"description": "Conducted research on polyimide films, hydrogen bonding \
		in polyurethanes, MRI on fluid distribution in textiles"
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
		"dates": "1999-2004"
	},
	{
		"name": "Georgia Institute of Technology",
		"location": "Atlanta, GA",
		"degree": "B.S.",
		"major": "Polymer and Textile Chemistry",
		"dates": "1995-1999"
	}]
};

var skills = ["Research and Development", "Data Analysis and Visualization",
		"Statistical Analysis", "Technical Writing", "Scientific Reviews",
		"Presentations", "Project Management",
		"<a href=https://orcid.org/0000-0002-4226-7710>Scientific Publications</a>"
];

var bio = {
	"name": "Christopher Stanley",
	"role": "Ph.D. Research Scientist",
	"contacts": "<a href=https://github.com/cbstanley>My GitHub</a>",
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
