export function getEvent(req, res) {
  const event = findEventById(req.params.id);
  if (!event) {
    throw new HttpError(404, 'Event not found');
  }
  res.json({ data: event });
}

export function createEvent(req, res) {
  const event = insertEvent(req.body);
  res.location(`/api/events/${event.id}`).status(201).json({ data: event });
}

export function updateEvent(req, res) {
  const event = updateEventById(req.params.id, req.body);
  if (!event) {
    throw new HttpError(404, 'Event not found');
  }
  res.json({ data: event });
}

export function deleteEvent(req, res) {
  if (!deleteEventById(req.params.id)) {
    throw new HttpError(404, 'Event not found');
  }
  res.status(204).end();
}