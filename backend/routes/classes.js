import express from 'express';
const router = express.Router();

// Store class enrollments (in production, use a database)
let enrollments = [];

// Submit online class enrollment
router.post('/online', (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      classType,
      preferredDate,
      preferredTime,
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !classType || !preferredDate || !preferredTime) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Create enrollment
    const enrollment = {
      id: Date.now().toString(),
      type: 'online',
      name,
      email,
      phone,
      classType,
      preferredDate,
      preferredTime,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // In production, save to database
    enrollments.push(enrollment);

    console.log('New online class enrollment:', enrollment);

    res.status(201).json({
      success: true,
      message: 'Online class enrollment submitted successfully',
      enrollmentId: enrollment.id,
    });
  } catch (error) {
    console.error('Error submitting online enrollment:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// Submit offline class contact request
router.post('/offline', (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      classType,
      address,
      message,
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !classType) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, and classType are required',
      });
    }

    // Create contact request
    const contactRequest = {
      id: Date.now().toString(),
      type: 'offline',
      name,
      email,
      phone,
      classType,
      address: address || '',
      message: message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // In production, save to database
    enrollments.push(contactRequest);

    console.log('New offline class contact request:', contactRequest);

    res.status(201).json({
      success: true,
      message: 'Contact request submitted successfully. We will contact you soon.',
      requestId: contactRequest.id,
    });
  } catch (error) {
    console.error('Error submitting offline contact:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// Get all enrollments (admin endpoint)
router.get('/all', (req, res) => {
  res.json({
    success: true,
    data: enrollments,
  });
});

// Get enrollment by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const enrollment = enrollments.find((e) => e.id === id);

  if (!enrollment) {
    return res.status(404).json({
      success: false,
      message: 'Enrollment not found',
    });
  }

  res.json({
    success: true,
    data: enrollment,
  });
});

export default router;

