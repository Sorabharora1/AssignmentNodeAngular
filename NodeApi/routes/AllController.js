const db = require("../models")
const journalHabit = db.journalHabit
const Habit = db.habits
const sequelize = db.sequelize 
var dateFormat = require('dateformat');
//var cargo = require('cargo');
var sync = require('sync');

const utils = require("../helpers/functions.js")
const Goal = db.journalGoal
const journalEmotion = db.journalEmotion
const isEmpty = utils.isEmpty
const Jmood = db.journalMood
const Jquestion = db.journalQuestion
const jResource = db.journalResource
const Tasks = db.journalTodayTasks
const journalActivity = db.journalActivity
