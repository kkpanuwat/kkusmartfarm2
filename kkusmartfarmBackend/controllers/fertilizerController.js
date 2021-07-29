const mysql = require("mysql");
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kkusmartfarm",
});

conn.connect();

exports.getActivity = function (req, res) {
  conn.query(
    "SELECT * FROM fertilizer_activity JOIN plant_plot on fertilizer_activity.activity_plant_plot = plant_plot.plant_plot_id",
    function (error, result, field) {
      if (error) throw error;
      res.json({ result: result });
    }
  );
};

exports.getPlantPlot = function (req, res) {
  conn.query("SELECT * FROM plant_plot", function (error, result, field) {
    if (error) throw error;
    res.json({ plantplot: result });
  });
};

exports.getFertilizer = function (req, res) {
  conn.query("SELECT * FROM fertilizer_item", function (error, result, field) {
    if (error) throw error;
    res.json({ fertilizer: result });
  });
};

exports.addActivity = function (req, res) {
  try {
    console.log("Addactivity");
    let data = req.body;
    data["activity_frequency"] = "some days";
    if (data.activity_weekday.length == 7) {
      data.activity_frequency = "everyday";
    }
    data.activity_time_begin =
      String(data.activity_time_begin[0]) +
      ":" +
      String(data.activity_time_begin[1]);
    data.activity_time_end =
      String(data.activity_time_end[0]) +
      ":" +
      String(data.activity_time_end[1]);
    data.activity_ratio = JSON.stringify(data.activity_ratio);
    data.activity_weekday = data.activity_weekday.toString();
    data.activity_plant_plot = data.activity_plant_plot.toString();
    console.log(data);
    conn.query(
      "INSERT INTO fertilizer_activity SET ?",
      data,
      function (error, result, field) {
        if (error) {
          return false;
        }
        console.log("create success");
        res.status(200).json({ message: "success" });
      }
    );
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

exports.updateStatus = function (req, res) {
  try {
    const activity_id = req.body.activity_id;
    const status = req.body.status;
    console.log(req.body);
    conn.query(
      "UPDATE fertilizer_activity SET activity_status = ? WHERE activity_id = ?",
      [status, activity_id],
      function (error, result, field) {
        if (error) {
          res.json({ message: "error" });
        }
        res.json({ message: "update success" });
      }
    );
  } catch (error) {
    res.json({ message: "error" });
  }
};

exports.getQueue = function (req, res) {
  conn.query(
    "SELECT * FROM queue_fertilizer JOIN fertilizer_activity ON queue_fertilizer.fertilizer_activity_id = fertilizer_activity.activity_id JOIN plant_plot ON plant_plot.plant_plot_id = fertilizer_activity.activity_plant_plot",
    function (error, result, field) {
      res.json({ result: result });
    }
  );
};

exports.addFertilizer = function (req, res) {
  const Data = req.body;
  try {
    conn.query(
      "INSERT INTO fertilizer_item SET ?",
      Data,
      function (error, result, field) {
        if (error) {
          res.status(204).json( {message: 'somting went wrong'} )
        }
        res.status(200).json({ message: "success" });
      }
    );
  } catch (error) {
    res.status(401).json({ message: 'somthing went wrong' })
  }
};

exports.updateFertilizer = function (req, res) {
  let data = req.body.data;
  let id = req.body.id;
  try {
    conn.query(
      "UPDATE fertilizer_item SET ? WHERE fertilizer_id = ?",
      [data, id],
      function (error, result, field) {
        console.log(result)
        if (result.changedRows === 0) {
          res.status(204).json({ message: "something went wrong" });
        } else {
          res.json({ message: 'Success' })
        }
      }
    );
  } catch (error) {}
};

exports.deleteFertilizer = function (req, res) {
  try {
    conn.query(
      "DELETE FROM fertilizer_item WHERE ?",
      req.body,
      function (err, result, field) {
        if (err) {
          res.status(400);
        }
      }
    );
    res.status(200).json({ message: "Test" });
  } catch (error) {
    res.status(400);
  }
};

exports.getAll = function (req, res) {
  res.send("This is all");
};
