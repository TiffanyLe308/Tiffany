app.controller("ThirdCaseController", ['$scope', '$http', function($scope, $http) {

  $scope.homeInterval = 3000;

  $scope.homeslides = [
    {
      image: '../../images/third-case/img_5.jpg'
    },
    {
      image: '../../images/third-case/img_15.jpg'
    },
    {
      image: '../../images/third-case/img_13.jpg'
    }
  ];

  $scope.menuInterval = 3000;

  $scope.menuslides = [
    {
      image: '../../images/third-case/img_9.jpg'
    },
    {
      image: '../../images/third-case/img_10.jpg'
    },
    {
      image: '../../images/third-case/img_11.jpg'
    },
    {
      image: '../../images/third-case/img_7.jpg'
    },
    {
      image: '../../images/third-case/img_12.jpg'
    },
    {
      image: '../../images/third-case/img_8.jpg'
    }
  ];

  $scope.menus = [
    {
      name: 'Overview',
      description: 'BikeX is ready to revolutionize the cycling world with new innovative design and unique usability. New innovative design and usability takes BikeX to the top of the cycling world and can blow your mind.',
      image: '../images/third-case/img_3.jpg'
    },
    {
      name: 'Design',
      description: 'We have designed a brand new bike concept without any unnecessary clutter taking the spotlight away from the beautiful, minimalistic design. It will pop on the streets and reflect your stylish personality.',
      image: '../images/third-case/img_6.jpg'
    },
    {
      name: 'Features',
      description: 'BikeX can be folded in half, which makes it easy to carry around or even take on the subway with you. With up to 9 gears, an ultra-light body and innovative wheel technology, the bike weighs just 12 pounds and it can turn from a cool city bike into design trasportation for longer trips with just a little twist.',
      image: '../images/third-case/img_4.jpg'
    }
  ];
  $scope.services = [
    {
      name: 'Weight',
      description: '12 lb'
    },
    {
      name: 'Gears',
      description: '3/5/9'
    },
    {
      name: 'Price',
      description: '359€'
    },
    {
      name: 'Framesize',
      description: '20"'
    },
    {
      name: 'Standover Height',
      description: '21"'
    },
    {
      name: 'Wheel Size',
      description: '22"'
    }
  ];

  $scope.events = [
    {
      name: 'Cycling for Charity',
      date: '28th',
      month: 'March',
      description: 'Many of our rides have a charity sponsor to give riders the opportunity to raise funds.'
    },
    {
      name: 'Cycling for Sport',
      date: '3rd',
      month: 'March',
      description: 'Our rides are designed for beginners, average fitness riders , up to more challenging routes to appeal to the more dedicated cyclist.'
    }
  ];
}]);
