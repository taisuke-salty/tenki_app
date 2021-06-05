require 'test_helper'

class AnalyzeControllerTest < ActionDispatch::IntegrationTest
  test "should get a_day" do
    get analyze_a_day_url
    assert_response :success
  end

end
