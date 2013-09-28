angular.module('CV', [])
.controller("CvController", function CvController($scope) {
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
  ];

  $scope.awesomes = [
    {
      when: 2013,
      what: "TUNL-MNTN-WTER",
      description: "WebGL demo made for Solskogen demo party 2013. Pronounced 'tunnel mountain water train'.",
      ranking: 4,
      url: "//demo.tidla.us/skog"
    },
    {
      when: 2013,
      what: "KINK demo",
      description: "A WebGL browser demo made for BEKK RoboCup 2013.",
      url: "//demo.tidla.us/kink-demo/"
    },
    {
      when: 2013,
      what: "Capra code challenge",
      description: "Capra consulting hosted a 24-hour hacking challenge where the goal was to develop a mobile-first application for TINE SA. Our solution was developed with django for backend using a REST API provided from TINE SA, and jquery-mobile for frontend.",
      ranking: 2
    },
    {
      when: 2013,
      what: "BEKK Robocup",
      description: "Part of the winning team of BEKK RoboCup 2013. The contest involved programming Microsoft Kinect and LEGO Mindstorms.",
      ranking: 1
    },
    {
      when: 2013,
      what: "Blast application",
      description: "Cross-platform location-based image-sharing application"
    }
  ];

  $scope.educations = [
    {
      start: 8.2011,
      end: "ongoing",
      where: "NTNU",
      description: "Masters degree in computer science"
    },
    {
      start: 8.2010,
      end: 6.2011,
      where: "University of Tromsø",
      description: "Masters degree in law"
    },
    {
      start: 8.2007,
      end: 6.2010,
      where: "Tromsdalen VGS",
      description: "Studiespesialiserende retning"
    },
    {
      start: 8.2004,
      end: 6.2007,
      where: "Tromstun Ungdomsskole",
      description: "Grunnskole"
    }
  ];

  $scope.jobs = [ 
    {
      start: 2.2012,
      end: "ongoing",
      where: "Trondheim Student Society",
      description: "Development and maintenance of public and internal systems",
      url: "//samfundet.no"
    },
    {
      start: 8.2013,
      end: "ongoing",
      where: "NTNU",
      description: "Teaching assistant - Algorithms and Datastructures"
    },
    {
      start: 6.2013,
      end: 8.2013,
      where: "Wireless Trondheim",
      description: "Rewrite and redesign of MazeMap application",
      url: "//mazemap.no"
    },
    {
      start: 6.2013,
      end: 8.2013,
      where: "StudiebyEn",
      description: "Development of webapp for visualizing campus, student housing, and points of interest",
      url: "//kart.studiebyen.no"
    },
    {
      start: 1.2013,
      end: 5.2013,
      where: "NTNU",
      description: "Student assistant - Procedural and object-oriented programming (c++)"
    },
    {
      start: 8.2012,
      end: 12.2012,
      where: "NTNU",
      description: "Student assistant - Introduction to information technology"
    },
    {
      start: 6.2012,
      end: 8.2012,
      where: "Kongsberg Satellite Services",
      description: "Development of mobile-friendly solution for viewing of mapping- and geodata."
    },
    {
      start: 1.2012,
      end: 1.2012,
      where: "Neumann Bygg",
      description: "Vareteller"
    },
    {
      start: 6.2011,
      end: 8.2011,
      where: "Tromsø Municipality",
      description: "Summer intern - Maintenance and painting of local shools."
    },
    {
      start: 2006,
      end: 2006,
      where: "NORUT IT",
      description: "PRYO - Basic programmering"
    }
  ];

  $scope.hasUrl = function hasUrl(obj) {
    return (typeof obj.url != "undefined");
  };
});
