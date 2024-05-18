import prisma from "../database/db.config.js";

export const fetchUsers = async(req, res)=>{
    const users = await prisma.user.findMany({});

    return res.json({status:200, message: "User Fetched.", data: users})
}

export const fetchUserById = async(req, res)=>{
    const userId = req.params.id;
    const user = await prisma.user.findFirst({
        where:{
            id: Number(userId)
        }
    });

    return res.json({status:200, message: "User Fetched.", data: user})
}

export const createUser = async (req, res) => {
    const { name, email, phone, password } = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (findUser) {
        return res.json({ status: 400, message: "Email Already Exists." })
    }

    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            phone: phone,
            password: password
        }
    });

    return res.json({ status: 200, message: "User Created." })

}

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, email, phone, password } = req.body;

    await prisma.user.update({
        where: {
            id: Number(userId)
        },
        data: {
            name, email, phone, password
        }
    })

    return res.json({ status: 200, message: "User Updated." })
}

export const deleteUserById = async(req, res)=>{
    const userId = req.params.id;

    const user = await prisma.user.delete({
        where:{
            id: Number(userId)
        }
    })

    return res.json({status: 200, message:"User Deleted.", data: user})
}