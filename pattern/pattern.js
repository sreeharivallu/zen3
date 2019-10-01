
patternGenerator(4);

function patternGenerator(val){
   
    for(let i=val;i>=1;i--){     
        generatePyramid(i,val);
    }

    for(let i=2;i<=val;i++){
       generatePyramid(i, val);       
    }
}

function generatePyramid(i, val){
    for(let a=i;a>=1;a--){
        process.stdout.write('\t');
    }

    for(let j=1;j<=val-i+1;j++){
        let k = Math.pow(j,2);
        process.stdout.write(k + '\t');
    }

    for(let j=0;j<val-i;j++){
        let k = Math.pow(val-i-j,2);
        process.stdout.write(k + '\t');
    }

    for(let a=i;a>=1;a--){
        process.stdout.write('\t');
    }            
    
    console.log('');
}
