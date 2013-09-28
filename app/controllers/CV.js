angular.module('CV', [])
.controller("DetailsController", function DetailsController($scope) {
  $scope.details = [
    {
      key: "name",
      value: "Aleksander Vognild Burkow"
    },
    {
      key: "location",
      value: "Korsgata 19D-16 7030 Trondheim"
    },
    {
      key: "dateOfBirth",
      value: "29.09.1991"
    },
    {
      key: "phone",
      value: "+47 47 05 83 99"
    },
    {
      key: "mail",
      value: "aleksanderburkow (at) gmail.com"
    }
  ]
})
.controller("AwesomeController", function AwesomeController($scope) {
  $scope.awesomes = [
    {
      when: 2013,
      what: "TUNL-MNTN-WTER",
      descr: "WebGL demo made for Solskogen demo party 2013. Pronounced 'tunnel mountain water train'.",
      ranking: 4
    },
    {
      when: 2013,
      what: "KINK demo",
      descr: "A webgl browser demo made for BEKK RoboCup 2013.",
    },
    {
      when: 2013,
      what: "Capra code challenge",
      descr: "Capra Code Challenge hosted a 24-hour hacking challenge where the goal was to develop a mobile-first application for TINE SA. Our solution was developed with django for backend using a REST API provided from TINE SA, and jquery-mobile for frontend.",
      ranking: 2
    },
    {
      when: 2013,
      what: "BEKK Robocup",
      descr: "Part of the winning team of BEKK RoboCup 2013. The contest involved programming Microsoft Kinect and LEGO Mindstorms.",
      ranking: 1
    },
    {
      when: 2013,
      what: "Blast application",
      descr: "Cross-platform location-based image-sharing application"
    }
  ]
})
.controller("EducationsController", function EducationController($scope) {
  $scope.educations = [
    {
      start: 8.2011,
      end: "ongoing",
      where: "NTNU",
      what: "Masters degree in computer science"
    },
    {
      start: 8.2010,
      end: 6.2011,
      where: "University of Tromsø",
      what: "Masters degree in law"
    },
    {
      start: 8.2007,
      end: 6.2010,
      where: "Tromsdalen VGS",
      what: "Studiespesialiserende retning"
    },
    {
      start: 8.2004,
      end: 6.2007,
      where: "Tromstun Ungdomsskole",
      what: "Grunnskole"
    }
  ]
})
.controller("JobsController", function JobsController($scope) {
    $scope.jobs = [ 
      {
        start: 2.2012,
        end: "ongoing",
        where: "Trondheim Student Society",
        what: "Development and maintenance of public and internal systems"
      },
      {
        start: 8.2013,
        end: "ongoing",
        where: "NTNU",
        what: "Teaching assistant - Algorithms and Datastructures"
      },
      {
        start: 6.2013,
        end: 8.2013,
        where: "Wireless Trondheim",
        what: "Rewrite and redesign of MazeMap application"
      },
      {
        start: 6.2013,
        end: 8.2013,
        where: "StudiebyEn",
        what: "Development of webapp for visualizing campus, student housing, and points of interest"
      },
      {
        start: 1.2013,
        end: 5.2013,
        where: "NTNU",
        what: "Student assistant - Procedural and object-oriented programming (c++)"
      },
      {
        start: 8.2012,
        end: 12.2012,
        where: "NTNU",
        what: "Student assistant - Introduction to information technology"
      },
      {
        start: 6.2012,
        end: 8.2012,
        where: "Kongsberg Sattelite Services",
        what: "Development of mobile-friendly solution for viewing of mapping- and geodata."
      },
      {
        start: 1.2012,
        end: 1.2012,
        where: "Neumann Bygg",
        what: "Vareteller"
      },
      {
        start: 6.2011,
        end: 8.2011,
        where: "Tromsø Municipality",
        what: "Summer intern - Maintenance and painting of local shools."
      },
      {
        start: 2006,
        end: 2006,
        where: "NORUT IT",
        what: "PRYO - Basic programmering"
      }
    ];
});
