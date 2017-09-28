/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
/*
Random saved stuff goes here.......
*/

// Bio Info Object
var bio = {
	"name": "Anthony Parillo",
	"role": "FrontEnd Web Developer",
	"welcomeMessage": "Welcome to my resume. Below, please find my skills, work history, and education",
	"biopic": "images/profileimg.jpg",
	"contacts": {
		"mobile": "251",
		"email": "aparillo87@gmail.com",
		"github": "- AnthonyParillo",
		"location": "Mobile, Alabama"
	},
	"skills": ["JavaScript", "HTML", "GitHub", "Microsoft Office"]
}
	// Header

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	// ContactsTop

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	// WelcomeMessage

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", "jdlkafjkdafj");
	$("#header").append(formattedMessage);


	// BioPic
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	// Skills
	if(bio.skills.length > 0) {
		
		$("#header").append(HTMLskillsStart);
		
		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);		
			$("#header").append(formattedSkill);
		}

	}

// Work Object
var work = {
	"jobs": [
		{
			"employer": "Dyncorp International",
			"title": "UH60 A/L Mechanic",
			"location": "Sharm el-Sheikh, Egypt",
			"dates": "May 2015 to Aug 2017",
			"description": "thisss",
			"images": "urltoimg"
		},
		{
			"employer": "Strom Aviation / Sikorsky",
			"title": "S92A Mechanic",
			"location": "Coatesville, PA",
			"dates": "Dec 2014 to May 2015",
			"description": "thisss",
			"images": "urltoimg"
		}
	]
}

	//Work Function and Loop
	function displayWork() {
		
		if(work.jobs.length > 0) {
			
			$("#workExperience").append(HTMLworkStart);

			for(job in work.jobs) {
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);

				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);			
				
				$(".work-entry:last").append(formattedDates);
				$(".work-entry:last").append(formattedLocation);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
	displayWork();

//Projects Object
var projects = {
	"projects": [
		{
			"title": "JavaScript Basics",
			"dates": "Aug 2017",
			"description": "JavaScript resume builder",
			"images": "urltoimg"
		},
		{
			"title": "Intro to JavaScript",
			"dates": "Aug 2017",
			"description": "JavaScript 101",
			"images": "urltoimg"
		}
	]
}

	// Projects Display
	projects.display = function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			// No Images Yet
			if(projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}			

		}
	}
	projects.display();



// Education Object
var education = {
	"schools": [
		{
			"name": "CTU",
			"location": "Colorado Springs, CO",
			"degree": "BSCS",
			"dates": "Sept. 2017 to Current",
			"url": "urlToSchool",
			"majors": ["Software Engineering", "other"]
		},
		{
			"name": "CTU",
			"location": "Colorado Springs, CO",
			"degree": "BSIT",
			"dates": "Jan. 2013 to Oct. 2013",
			"url": "urlToSchool",
			"majors": ["Software Systems Engineering", "other"]
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "Sept. 2017 to Current",
			"url": "urlToCourse"
		}
	]
}
	//Education Disply
	function displayEducation() {

		if(education.schools.length > 0) {

			$("#education").append(HTMLschoolStart);

			for(school in education.schools) {
				var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedNameDegree = formattedName + formattedDegree;

				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				//var formattedUrl = HTMLworkUrl.replace("%data%", education.schools[school].url);
				
				$(".education-entry:last").append(formattedNameDegree);
				$(".education-entry:last").append(formattedLocation);
				$(".education-entry:last").append(formattedDates);
				//$(".education-entry:last").append(formattedUrl);

				if(education.schools[school].majors.length > 0) {
					
					for(major in education.schools[school].majors) {
					
						var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);			
				
						$(".education-entry:last").append(formattedMajors);
					}
				}
			}
		}

		

		if(education.onlineCourses.length > 0) {

			$(".education-entry").append(HTMLonlineClasses);

			for(course in education.onlineCourses) {
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedTitleSchool = formattedTitle + formattedSchool;

				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
				var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				
				
				$(".education-entry:last").append(formattedTitleSchool);
				$(".education-entry:last").append(formattedDates);
				$(".education-entry:last").append(formattedUrl);
			}
		}
	}
	displayEducation();



	// Clicks Logging

	$(document).click(function(loc) {
	  var x = loc.pageX;
	  var y = loc.pageY;

	  logClicks(x,y);
	});

	// Map

	$("#mapDiv").append(googleMap);
/*
	//Locationizer

	function locationizer(work_obj) {

		var locationArray = [];

		for(var job in work.jobs) {
			locationArray.push(work.jobs[job].location);
		}

		return locationArray;

	}


	//Internationalize Names

	function inName(name) {

		name = name.trim().split(" ");
		console.log(name);
		
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase() +
						name[0].slice(1).toLowerCase();

		return name[0] + " " + name[1];
	}
	$("#main").append(internationalizeButton);
*/





