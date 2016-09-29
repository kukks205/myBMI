angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('BmiCtrl', function($scope,$state) {

    $scope.bmiCalc = function(bw,h) {
      
      var hm = (h/100);
      
      var bmi = bw/(hm*hm);

      $scope.bmi = bmi;

    }

    $scope.goTo =function(bmi){
      $state.go('tab.bmi-advice',{bmi :bmi});
    }


})


.controller('AdviceCtrl',function($scope,$stateParams){

  $scope.bmi = $stateParams.bmi;
  if($scope.bmi<=23){

    $scope.text ="คุณปฏิบัติดีแล้ว";

  } else if($scope.bmi>23&&$scope.bmi<=25){

    $scope.text ="กินน้อยลงหน่อยนะ";

  }else if($scope.bmi>25){

    $scope.text ="คุณอ้วนมากๆๆๆๆๆๆ";

  }else{
    $scope.text ="คำนวณไม่ได้ครับ";
  }

})



.controller('ChatsCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
