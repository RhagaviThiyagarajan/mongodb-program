//Find all the topics 
//and tasks which are thought in the month of October
db.data.find({
"month":"october"})

//find the data greater than the date 15/8/20
db.collection.find({
    "date": {
      "$gt": "15/08/2020"
    }
  })

  //find the company drivers which appeared in month of september
  db.collection.find({},
    {
      "company_drivers": 1,
      "month": "september"
    })


    //find the mentors and topics covered during september
    db.collection.find({},
        {
          "mentor": 1,
          "topics": 1,
          "month": "september"
        })


        //find the mentor count greater than 15
        db.collection.find({
            "mentor": 1,
            count: {
              $gt: 15
            }
          })