app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Office Spaces in the UK';
  $scope.promo = 'New Locations in the UK';
  $scope.products = [
    {
      name: 'Old School',
      price: 250,
      pubdate: new Date('2014', '03', '08'),
      cover: 'assets/img/webpicheroheader1.jpg',
      likes: 0,
      dislikes: 0
      },
    {
      name: 'Minimalist',
      price: 190,
      pubdate: new Date('2013', '08', '01'),
      cover: 'assets/img/webpicheroheader2.jpg',
      likes: 0,
      dislikes: 0
      },
    {
      name: 'Stylish',
      price: 150,
      pubdate: new Date('2014', '03', '08'),
      cover: 'assets/img/webpicheroheader3.jpg',
      likes: 0,
      dislikes: 0
      },
    {
      name: 'Simple',
      price: 100,
      pubdate: new Date('2013', '08', '01'),
      cover: 'assets/img/webpicheroheader4.jpg',
      likes: 0,
      dislikes: 0
      }
    ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
    };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
    };
}]);