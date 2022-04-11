# momentum
>스터디 내용 정리하기
<br>

1. variable  
    -consr : 상수, 변하지 않는 값 / 업데이트 불가능  
    -let : 새로운걸 생성할때 사용하는 변수 / 업데이트 가능  
    -var : 이전에 사용하던 방식, 어떠한 규칙도 없음.  
    -결론적으로 const가 기본이며 let은 종종 사용 var 사용은 지양한다.  

2. booleans  
    -true,false,null,undefined  
    -null은 자연적으로 발생하는 값이 아니다.  
    -undefined은 값이 주어지지 않은 것이며 null은 값이 비어있는 것이다.  

3. arrays  
    -const dayOfWeek =["mon","tue","wed"]  
    -[]이 내부에 콤마로 구분하고 숫자,string,booleans,null,undefined 가능  
    -console.log(dayOfWeek[0]) : mon이 출력됨  
    -dayOfWeek.push("thur") : thur이 추가됨  

4. objects  
    -const player = {  
        name: "son", age: 34, fat: false  
    }  
    이렇게 진행하게 되면 console.log(player.name)으로 찾아서 son 이라는 값이 출력됨.
    console.log(play["name"])으로 하였을때도 같은 값이 출력된다.
    -player.fat = false 처럼 업데이트도 가능하다.  
    *const는 변하지 않는 값이지만 const 안에 무언가를 업데이트 하는것은 가능하다.  

5. functions  
    -function은 계속 반복해서 사용할 수 있는 코드조각을 의미한다.  
    -function sayHello(){  
        console.log("hi")  
    }  
    sayHello() : 여기서의 괄호 두개가 function을 실행하는 방법  
    -argument는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법  
    -function sayHello(nameOfPerson){  
        console.log("hi I'm " + nameOfPerson)  
    }  
    sayHello('A')  
    sayHello('B') : 각각의 결과값은 hi I'm A/B  

    function play(a,b){  
        console.log(a+b)  
    }  
    play(5,10)  

6. return  
    -function이 어떤값을 return 하기 때문에 function을 호출하는 코드가 function의 반환값이 됨  
    const calculator = {  
        plus : function(a,b){  
            retutn a + b;  
        },  
        minus : function(a,b){  
            return a - b;  
        }  
    }  
    const resultCalc = calculator.plus(5,10);  
    -return을 하면 function은 작동을 멈추고 결과값을 return하고 끝나버린다.  
    