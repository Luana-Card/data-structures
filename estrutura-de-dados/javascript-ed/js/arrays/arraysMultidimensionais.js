//ESTRUTURA TRIDIMENSIONAL
var years = []
var firstYears = []
var lastestYears = []
var monthlyRating = []

var monthlyRating2001 = [589, 595, 610, 613, 610, 620, 720, 300, 510, 540, 620, 625]
var monthlyRating2002 = [589, 595, 610, 613, 610, 620, 720, 300, 510, 540, 620, 625]
var monthlyRating2003 = [610, 560, 610, 600, 610, 620, 715, 340, 510, 540, 620, 625]
var monthlyRating2004 = [589, 503, 610, 613, 605, 620, 720, 300, 510, 525, 640, 625]

monthlyRating[0] = monthlyRating2001
monthlyRating[1] = monthlyRating2002

firstYears = [monthlyRating2001, monthlyRating2002]
lastestYears = [monthlyRating2003, monthlyRating2004]

years = [firstYears, lastestYears]

console.log(years[1] [0] [8]) //retorna 510
//years[1] = lastestYears
//lastestsYears[0] = monthlyRatinh2003
//monthlyRating2003[8] = 510






//PERCORRENDO O ARRAY PARA IMPRIMIR CADA VALOR

//entrando em cada array e percorrendo todas as posições
// x, y e z persorrem de forma dinãmica
for(var x = 0; x < years.length; x++) {
    for(y = 0; y < years[x].length; y++) {
        for(z = 0; z , years[x][y].length; z++){
            console.log(years [x], [y],[z])
        }
    }
}
