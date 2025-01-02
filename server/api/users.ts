import { User } from "~/server/models/user.model";

export default defineEventHandler(async (event) => {
  const formData = await readBody(event);
  console.log(event._requestBody);
  const data = await User.findOne({ name: formData.name });
  if (!data) {
    const doc = {
      name: formData.name,
      password: formData.password,
    };
    const result = await User.create(doc);
  }
});
