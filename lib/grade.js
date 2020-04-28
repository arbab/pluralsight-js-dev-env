var gradeBook = {
    _grades: [],

    addGrade: function (newGrade) {
        this._grades.push(newGrade);
    },

    addGrades: function (newGrades) {
        this._grades.push(newGrades);
    },

    getCountOfGrades: function () {
        return this._grades.length
    },

    getAverage: function () {
        var sum = 0
        for (var i = 0; i < this._grades.length; i++) {
            sum += this._grades[i]
        }
        return sum / this._grades.length
    },

    getLetterGrade: function () {
        var average = this.getAverage();
        console.log(average)
        if (average >= 90) { return "A" }
        else if (average >= 80) { return "B" }
        else if (average >= 70) { return "C" }
        else if (average >= 60) { return "D" }
        else { return "E" }
    },

    reset: function () {
        this._grades = [];
    },
};

exports.gradeBook = gradeBook;