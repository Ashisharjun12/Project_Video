import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //steps to register user
  //1. get details like name user name avatart password ,etc
  //2.validation
  //3.check user alreaddy exist
  //4.check for images and avatar
  //5 upload to cloudnarity
  //6. create user object
  //7. cretae user entry in db
  //remove password and refres token
  //9.check for user cretetion
  //10.return response

  const { username, email, fullname, password } = req.body;

  console.log("email :", email);

  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fiels must be required");
  }

  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or Username already exist");
  }



  const avatarLocalPath = req.files?.avatar[0]?.path

  const coverImageLocalPath = req.files?.coverImage[0]?.path
  
  
  if (!avatarLocalPath) {
      throw new ApiError(400 , "avtart is required")
      
  }
  
  
  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)
  
  if(!avatar){
      throw new ApiError(400 , "avtart is required")
  
  }
  
  
    const user= await User.create({
      fullname,
      avatar: avatar.url,
      coverImage : coverImage?.url || "",
      email,
      password,
      username:username.toLowerCase()
  
  })
  
  const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
  )
  
  
  if (!createdUser) {
      throw new ApiError(500 , "something went wrong while user register")
      
  }


return res.status(201).json(
    new ApiResponse(200 ,createdUser , "User Register Successfully")
)

});



export { registerUser };
