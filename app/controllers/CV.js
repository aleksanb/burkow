angular.module('CV', [])
.controller("AwesomeController", function AwesomeController($scope) {
  $scope.awesomes = [
    {
      when: 2013,
      what: "Solskogen",
      descr: "TUNL-MNTN-WTR-TRAIN",
      ranking: 4
    },
    {
      when: 2013,
      what: "KINK DEMO",
      descr: "Demo made for the Robocup competition",
    },
    {
      when: 2013,
      what: "Capra code challenge",
      descr: "Tekst her",
      ranking: 2
    },
    {
      when: 2013,
      what: "BEKK Robocup",
      descr: "Vinnere av Bekks robocup 2013",
      ranking: 1
    },
    {
      when: 2013,
      what: "Blast application",
      descr: "Cross-platform bildedelingsapplikasjon"
    }
  ]
})
.controller("EducationsController", function EducationController($scope) {
  $scope.educations = [
    {
      start: 8.2011,
      end: "ongoing",
      where: "NTNU",
      what: "Master i Datateknikk"
    },
    {
      start: 8.2010,
      end: 6.2011,
      where: "Universitetet i Tromsø",
      what: "Master i Rettsvitenskap"
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
        where: "Studentersamfundet i Trondhjem",
        what: "Webutvikler"

      },
      {
        start: 8.2013,
        end: "ongoing",
        where: "NTNU",
        what: "Undervisningsassistent - Algoritmer og Datastrukturer"
      },
      {
        start: 6.2013,
        end: 8.2013,
        where: "Trådløse Trondheim",
        what: "Javascriptutvikler på MazeMap"
      },
      {
        start: 6.2013,
        end: 7.2013,
        where: "StudiebyEn",
        what: "Webutvikler Kart"
      },
      {
        start: 1.2013,
        end: 5.2013,
        where: "NTNU",
        what: "Studentassistent - POOP (c++)"
      },
      {
        start: 8.2012,
        end: 12.2012,
        where: "NTNU",
        what: "Studentassistent - Informasjonsteknologi Grunnkurs"
      },
      {
        start: 6.2012,
        end: 8.2012,
        where: "Kongsberg Sattelite Services",
        what: "Webutvikler Kart"
      },
      {
        start: 1.2012,
        end: 1.2012,
        where: "Neumann Bygg",
        what: "Vareteller"
      },
      {
        start: 6.2011,
        end: 7.2011,
        where: "Tromsø Kommune",
        what: "Sommervikar - Bygg og anlegg"
      },
      {
        start: 2006,
        end: 2006,
        where: "NORUT IT",
        what: "PRYO - Grunnleggende programmering"
      }
    ];
});
