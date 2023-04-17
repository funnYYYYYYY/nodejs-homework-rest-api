const express = require("express");
const router = express.Router();

const { contacts: ctrl } = require("../../controllers");
const {
  validation,
  ctrlWrapper,
  isValidId,
  authenticate,
} = require("../../middlewares");
const {
  addSchema,
  updateFavorite,
} = require("../../schemas/contactsSchema/contactsSchema");

const validateMiddleware = validation(addSchema);

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.getContactById)
);

router.post(
  "/",
  authenticate,
  validateMiddleware,
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateMiddleware,
  ctrlWrapper(ctrl.updateContact)
);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.getContactById)
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validation(updateFavorite),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeContact));

module.exports = router;
