import { constants } from "../services/utils/constants.js"
import { update as update_service } from "../services/user.service.js"

const { status, message } = constants.response

const update = async (req, res) => {
    const user_db = await update_service(req.params.user_id, req.body)
    res.status(status.OK).json(user_db)
}

export default update
