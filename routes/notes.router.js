const router = require('express').Router();
const notesControllers = require('../controllers/notes.controllers');

router.get('/',notesControllers.getAllNotes);
router.post('/',notesControllers.createNote);
router.get('/:id',notesControllers.getOneNote);
router.put('/:id',notesControllers.updateNote);
router.delete('/:id',notesControllers.deleteNote);

module.exports = router;