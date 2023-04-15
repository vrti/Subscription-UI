import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import withStyles from '@mui/styles/withStyles';
import { subscriptionStyle } from './subscription.style';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { userTypes, applicationTypes, setAttribute, submit } from '../redux/modules/subscription';
import _ from 'lodash'
import S from 'string'
import addrs from 'email-addresses'

const SubscriptionForm = (props) => {
    const { classes, theme } = props;
    const dispatch = useDispatch();
    const subscription = useSelector((state) => state.subscription);

    const handleChange = (event) => {
        // set form field values in redux state
        dispatch(setAttribute(event.target.name, event.target.value))
    }

    const submitSubscription = () => {
        // write code to perform actions on submitting the subscription request
        alert("Successfully submitted subscription request !!")
        dispatch(submit())
    }

    const {
        name,
        email,
        userType,
        company,
        applicationType
    } = subscription;

    /* Validate Form Fields*/
    let nameError = {}
    if (S(name).isEmpty()) {
        nameError = {
            error: true
        }
    }

    let emailError = {}
    if (S(email).isEmpty()) {
        emailError = {
            error: true
        }
    } else {
        const address = addrs.parseOneAddress(email)
        if (!address) {
            emailError = {
                error: true,
                helperText: 'Not a valid email adress'
            }
        }
    }

    let userTypeError = {}
    if (S(userType).isEmpty()) {
        userTypeError = {
            error: true
        }
    }

    let companyError = {}
    if (S(company).isEmpty()) {
        companyError = {
           error: true
        }
    }

    let applicationTypeError = {}
    if (S(applicationType).isEmpty()) {
        applicationTypeError = {
            error: true
        }
    }

    let disabled = nameError.error || emailError.error || userTypeError.error || companyError.error || applicationTypeError.error

    const userTypeItems = _.map(userTypes, (item, index) => {
        return (
            <MenuItem value={item.value} key={item.value}>{item.name}</MenuItem>
        )
    })

    const applicationTypeItems = _.map(applicationTypes, (item, index) => {
        return (
            <MenuItem value={item.value} key={item.value}>{item.name}</MenuItem>
        )
    })

    return (
        <Dialog
            open={true}
            fullWidth
        >
            <DialogTitle>
                Subscription Request
            </DialogTitle>
            <Divider />
            <DialogContent className={classes.container}>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    size="small"
                    value={name}
                    onChange={(e) => handleChange(e)}
                    required={true}
                    {...nameError}
                    classes={{
                        root: classes.userField
                    }}
                />

                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    size="small"
                    onChange={(e) => handleChange(e)}
                    required={true}
                    {...emailError}
                    classes={{
                        root: classes.userField
                    }}
                />

                <FormControl size="small"  {...userTypeError} required={true}>
                    <InputLabel>User Type</InputLabel>
                    <Select
                        id="userType"
                        name="userType"
                        value={userType}
                        label="Age"
                        onChange={(e) => handleChange(e)}
                        className={classes.userField}
                    >
                        {userTypeItems}
                    </Select>
                </FormControl>

                <TextField
                    id="company"
                    name="company"
                    label="Company"
                    variant="outlined"
                    size="small"
                    value={company}
                    onChange={(e) => handleChange(e)}
                    required={true}
                    {...companyError}
                    classes={{
                        root: classes.userField
                    }}
                />

                <FormControl
                    size="small"
                    {...applicationTypeError}
                    required={true}
                >
                    <InputLabel>Aplication Type</InputLabel>
                    <Select
                        id="applicationType"
                        name="applicationType"
                        value={applicationType}
                        label="Age"
                        onChange={(e) => handleChange(e)}
                        className={classes.userField}
                    >
                        {applicationTypeItems}
                    </Select>
                </FormControl>

                <Button
                    type='submit'
                    variant='contained'
                    onClick={submitSubscription}
                    disabled={disabled}
                    fullWidth
                >
                    Submit
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default withStyles(subscriptionStyle, { withTheme: true })(SubscriptionForm);