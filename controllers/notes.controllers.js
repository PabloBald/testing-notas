const db = require("../models/index");
const { Nota } = db;
const getAllNotes = async (req, res) => {
	const nota = await Nota.findAll();
	return res.status(200).send(nota);
};
const getOneNote = async (req, res) => {
	let { id } = req.params;
	const nota = await Nota.findOne({ where: { id } });
	return res.status(200).send(nota);
};

const createNote = async (req, res) => {
	const nuevaNota = req.body;
	Nota.create(nuevaNota);
	return res.status(201).send(nuevaNota);
};

const deleteNote = async (req, res) => {
	const { id } = req.params;
	const deleted = await Nota.destroy({ where: { id } });
	return res.sendStatus(200).send(deleted);
};

const updateNote = async (req, res) => {
	const { id } = req.params;
	const editedNote = req.body;
	const nota = Nota.update(editedNote, { where: {id} });
	return res.status(200).send(nota);
};

const notesControllers = {
	getAllNotes,
	getOneNote,
	createNote,
	deleteNote,
	updateNote,
};

module.exports = notesControllers;
