var sum = 0;
for(var i=0; i<10; i++){
    sum += i;
}
postMessage(sum);
close();

/* 웹 워커 기능을 이용하여 만든 백그라운드 테스크를 워커 태스크(Worker Task)라 부른다. HTML 문서와 자바스크립트
   코드를 실행하는 환경으로서, window 객체와 그 밑의 DOM 객체들로 구성되는 메인 태스크와 달리 워커 태스크는 윈도
   우가 없는 "DedicatedWorkerGlobalScope"라 불리는 환경에서 제공하는 프로퍼티와 메소드, 이벤트 리스너 등을 제외
   한 각종 UI 작업이 일체 불가하다.

   ※ close() 함수를 호출하면 테스크 스스로를 종료하며, 더 이상 워커 태스크와 message 이벤트를 주고 받을 수 없다.
*/