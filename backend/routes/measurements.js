import express from 'express';
const router = express.Router();

// Store measurements (in production, use a database)
let measurements = [];

// Submit measurement order
router.post('/submit', (req, res) => {
  try {
    const {
      garmentType,
      customerName,
      phone,
      email,
      measurements: measurementData,
      notes,
    } = req.body;

    // Validate required fields
    if (!garmentType || !customerName || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: garmentType, customerName, and phone are required',
      });
    }

    // Create order
    const order = {
      id: Date.now().toString(),
      garmentType,
      customerName,
      phone,
      email: email || '',
      measurements: measurementData || {},
      notes: notes || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // In production, save to database
    measurements.push(order);

    console.log('New measurement order:', order);

    res.status(201).json({
      success: true,
      message: 'Measurement order submitted successfully',
      orderId: order.id,
    });
  } catch (error) {
    console.error('Error submitting measurement:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// Get all measurements (admin endpoint)
router.get('/all', (req, res) => {
  res.json({
    success: true,
    data: measurements,
  });
});

// Get measurement by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const order = measurements.find((m) => m.id === id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: 'Order not found',
    });
  }

  res.json({
    success: true,
    data: order,
  });
});

export default router;

