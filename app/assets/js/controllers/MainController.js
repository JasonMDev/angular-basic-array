app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books in the UK';
  $scope.promo = 'New Release in Books in the UK';
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'assets/img/webpicheroheader1.jpg',
      likes: 0,
      dislikes: 0
      },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'assets/img/webpicheroheader2.jpg',
      likes: 0,
      dislikes: 0
      },
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'assets/img/webpicheroheader3.jpg',
      likes: 0,
      dislikes: 0
      },
    {
      name: 'Program or be Programmed',
      price: 8,
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