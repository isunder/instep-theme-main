import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { wishlistadd, wishlistget, wishlistremove } from '../../../Redux/action/wishlistAction';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from '../../../utils/auth';

const Wishlistmaincomponent = () => {

    const dispatch = useDispatch();

    const userData = getUserId();
    console.log(userData, "userData");
    const data = useSelector((state) => state?.getproductdata?.listdata);

    const [wishlist, setWishlist] = useState({});

    const datas = useSelector(
        (state) => state?.getwishlisdData?.listdata?.data?.data
    );

    useEffect(() => {
        dispatch(wishlistget({ userId: userData?.id }));
    }, []);

    const handleWishlistClick = (productId, wishliststatus) => {
        console.log(productId, "sdfghjk");
        if (wishliststatus == "delete") {
            //Delete API
            dispatch(
                wishlistremove({ userId: userData?.id, itemId: productId })
            ).then((res) => {
                dispatch(wishlistget({ userId: userData?.id }));
            });
        } else if (wishliststatus == "add") {
            //Add API
            dispatch(
                wishlistadd({
                    userId: userData?.id,
                    items: productId,
                })
            ).then((res) => {
                dispatch(wishlistget({ userId: userData?.id }));
            });
        }
        setWishlist((prevWishlist) => ({
            ...prevWishlist,
            [productId]: !prevWishlist[productId],
        }));
    };
    return (
        <>
            {data &&
                data?.products?.map((e) => {
                    if (e.image) {
                    }
                    let isInwishlist =
                        datas &&
                        datas?.length > 0 &&
                        datas?.find((item) => item?.items === e?._id);

                    <div>
                        {
                            isInwishlist ? (
                                <AiFillHeart
                                    style={{
                                        color: "#FF0000", // Change to your desired color
                                        width: "23px",
                                        height: "23px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        handleWishlistClick(e?._id, "delete")
                                    }
                                />
                            ) : (
                                <AiOutlineHeart
                                    style={{
                                        color: "#808080",
                                        width: "23px",
                                        height: "23px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        handleWishlistClick(e._id, "add")
                                    }
                                />
                            )
                            // )
                        }
                    </div>
                })}
        </>
    )
}

export default Wishlistmaincomponent

