/**
 * comment before simpleFunction
 * @simpleFunctionAnnotation(var1='var1Value',var2='var2Value')
 */
function simpleFunction(){

    /*body of simpleFunction*/
    function innerSimpleFunction(arg1, arg2){
        /*definition*/
    }
    var innerVar = "";


    /**
     * comments before innerSimpleFunctionEx
     */
    var innerSimpleFunctionEx = function (){
        /*definition*/
    };

    globalVar = 10;
}

var globalScopeVar = "test";
/**
 * comment before simpleFunctionEx
 */
var simpleFunctionEx = function(arg){
    /*body of simpleFunctionEx*/    
};