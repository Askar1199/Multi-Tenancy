import * as bcrypt from 'bcryptjs';

export const tokenGenerator = () => {
  return require('crypto').randomBytes(20).toString('hex');
};

export const comparePassword = async (userPassword, currentPassword) => {
  return await bcrypt.compare(currentPassword, userPassword);
};
