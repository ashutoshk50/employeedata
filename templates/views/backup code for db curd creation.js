
try {
    const newregistrationData = new Registrationdata({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
    });
    const registered = await newregistrationData.save();
    res.render("createuser");
    console.log('data inserted');
} catch (error) {
    console.log(error);
}