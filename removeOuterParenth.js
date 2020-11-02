// Given a valid parenthesis string (with only '(' and ')', an open parenthesis will always end with a close parenthesis, and a close parenthesis will never start first), remove the outermost layers of the parenthesis string and return the new parenthesis string. 

// If the string has multiple outer layer parenthesis (ie (())()), remove all outer layers and construct the new string. So in the example, the string can be broken down into (()) + (). By removing both components outer layer we are left with () + '' which is simply (), thus the answer for that input would be ().


function chopSides(arr) {
    arr.splice(0, 1)
    arr.splice(arr.length - 1)
}

var removeParentheses = S => {
    let count = 0
    let inter = []
    let res = ''
    const map = {
        '(': 'open', ')': 'close'
    }

    for (let i=0; i < S.length; i++){
        const brace = S[i]
        if (map[brace] === 'open') count++
        else count--
    
        inter.push(brace)
    if (count === 0){
        chopSides(inter)
        res += inter.join('')
        inter.length = 0
    }
    }
    
    return res
}

S =  "(()())(())"
console.log(removeParentheses(S))