export const config = {
  'dev': {
    'username': 'udagram',
    'password': '0g5RUxf1VY9FYfj5fPl6',
    'database': 'udagram',
    'host': 'udagram-dev.cr9ingzaggoo.us-east-1.rds.amazonaws.com',
    'dialect': 'postgres',
    'aws_region': 'us-east-1',
    'aws_profile': 'udagram-dev',
    'aws_media_bucket': 'udagram-645854877916-dev'
  },
  'jwt': {
    'secret': ' '
  },
  'prod': {
    'username': '',
    'password': '',
    'database': 'udagram_prod',
    'host': '',
    'dialect': 'postgres'
  }
};
