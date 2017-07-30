(function() {
    function CollectionCtrl() {
    this.albums = [];
for (var i=0; i < 12; i++) {
    this.albums.push(angular.copy(albumPicasso));
}
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);

        (function() {
})();
  function AlbumController(fixtureService) {
    this.albumData = fixtureService.getAlbumData();
    console.log(this.albumData);
    function CollectionCtrl(Fixtures) {
    this.albums = Fixtures.getCollection(12);
  }

  angular
    .module('myApp')
    .controller('AlbumController',['fixtureService', AlbumController]);


})();
