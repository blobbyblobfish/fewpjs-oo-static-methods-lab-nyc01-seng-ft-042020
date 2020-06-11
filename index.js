class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(sentence){
    const sentenceArray = sentence.split(" ")
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    let titleized = `${this.capitalize(sentenceArray[0])}`

    //check if word is in exceptions
    for (let x=1; x < sentenceArray.length; x++) {
      let exception;

      for (const word of exceptions) {
        if (sentenceArray[x] === word) {
          exception = true
        }}

      //if yes, add to sentence as is
      if (exception) {
        titleized = titleized + " " + sentenceArray[x]
      }

      //else capitalize
      else {
        titleized = titleized + " " + this.capitalize(sentenceArray[x])
      }
    }

    return titleized
  }
}

Formatter.titleize("this is a test")