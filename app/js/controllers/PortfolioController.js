app.controller('PortfolioController', ['$scope', function($scope) {
  $scope.lists = [
    {
      image: '../images/Pic_16.jpg',
      title: 'TastyPastry',
      link: 'http://goliathservice.com/#!/home',
      description_one: ' is a bakery shop where cake consultants and decorators will create the perfect cake for customers',
      description_two: 'The project mainly uses HTML5, CSS3, Bootstrap 3, Javascript, AngularJS.',
      detail_one: 'Giving a wonderful piece of art and truly experience its taste, TastyPastry shop tries to make your special event a memorable day.'
    },
    {
      image: '../images/Pic_21.jpg',
      title: 'BeanCorner',
      link: 'http://bileltd.org/',
      description_one:' is a website that presents BeanCorner store.',
      description_two:' Introduce about their coffee as well as sharing their interest in coffee with the customers.',
      detail_one: 'I used mostly HTML5, CSS3, Bootstrap 3, Javascript, AngularJS to complete this website.'
    },
    {
      image: '../images/Pic_12.jpg',
      title: 'Saigon E-mart',
      link: 'http://www.saigon-emart.com/#/',
      description_one: ' is a new e-commerce project which all ideas will be concentrated to:',
      description_two: 'My responsibility is to implementing the design using HTML5, CSS3, Bootstrap 3, Javascript, AngularJS.',
      detail_one: 'Increase awareness',
      detail_two: 'Generate More Sales',
      detail_three: 'Improve Customer Satisfaction'
    },
    {
      image: '../images/Pic_9.jpg',
      title: 'Aquarium Nerd',
      link: 'http://aquariumnerd.net/',
      description_one: ' is an information platform about designing an aquascape and maintaining an aquarium.',
      description_two: 'Providing aquarium fish information which covers tropical freshwater fish and aquarium fish information in a way that every fish keeper can understand',
      detail_one: 'HTML5, CSS3, Bootstrap 3, Javascript(ES6), React are languages I used to complete this platform.'
    },
    {
      image: '../images/Pic_10.jpg',
      title: 'Goly',
      link: 'https://goly.co/FI',
      description_one: ' is an all-in-one platform to discover, sell, process orders & collaborate on event projects.',
      description_two: 'From discovery to payments, have fun creating your wedding, birthday, exhibition, book launch, corporate party and so on. No limits.',
      detail_one: 'I do my job mostly used HTML5, CSS3, Bootstrap 3, Javascript, AngularJS.'
    },
    {
      image: '../images/Pic_14.jpg',
      title: 'My Portfolio',
      link: 'http://www.tiffanywpportfolio.com/',
      description_one:' is my own website written based on Wordpress.'
    }
  ];

  $scope.blogs = [
    {
      image: '../images/Pic_6.jpg',
      title_one: 'Makeup products',
      title_two: 'Style yourself',
      description_one: 'Check out our Best of Beauty and Readers\'\ Choice beauty awards to discover the winning beauty products in every category: hair, makeup, fragrance.',
      description_two: 'You are in a beauty contest every day of your life.'
    },
    {
      image: '../images/Pic_8.jpg',
      title_one: 'Skincare products',
      title_two: 'Be yourself',
      description_one: 'Healthy skin starts with a regular skin care regimen, using high quality products every day.Purifying cleansers, refreshing toners and hydrating moisturizers cover the basics for the face.',
      description_two: 'Be bold. Be daring. Be simply beautiful.'
    },
    {
      image: '../images/Pic_19.jpg',
      title_one: 'Beauty gadgets',
      title_two: 'Its tools time',
      description_one: 'Whether you want to get rid of acne, smooth wrinkles or detox your pores, these at-home beauty gadgets can help',
      description_two: 'There is no such thing as natural beauty.'
    }
  ];
}]);
