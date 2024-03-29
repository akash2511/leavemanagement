'use strict';

module.exports = async (request, h) => {
  try {
    const {prisma} = request.server.app;
    const employeeId = request.query.employeeId;
    const visible = request.payload.visible !== undefined ? request.payload.visible : false;
    await prisma.$queryRaw`UPDATE public.userlogin SET visibility = ${visible} WHERE id = ANY(${employeeId});`;
    let message;
    if (visible) {
      message = 'Employee unarchived';
    } else {
      message = 'Employee deleted';
    }
    return {
      statusCode: 201,
      employeeId,
      message,
    };
  } catch (e) {
    throw e;
  }
};
